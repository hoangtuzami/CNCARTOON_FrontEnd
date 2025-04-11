import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

const AuthForm = ({ isLogin, onSubmit, error }) => {
    const formik = useFormik({
        initialValues: {
            userName: "",
            password: "",
            confirmPassword: "",
            email: "",
            fullName: "",
            rememberMe: false,
        },
        validationSchema: Yup.object({
            userName: Yup.string().required("Vui lòng nhập tên tài khoản"),
            password: Yup.string().required("Vui lòng nhập mật khẩu"),
            ...(isLogin
                ? {}
                : {
                    confirmPassword: Yup.string()
                        .oneOf([Yup.ref("password"), null], "Mật khẩu không khớp")
                        .required("Vui lòng nhập lại mật khẩu"),
                    fullName: Yup.string().required("Vui lòng nhập họ tên"),
                    email: Yup.string().email("Email không hợp lệ").required("Vui lòng nhập email"),
                }),
        }),
        onSubmit: (values) => {
            onSubmit(values);
        },
    });

    return (
        <form onSubmit={formik.handleSubmit} className="space-y-4">
            {!isLogin && (
                <>
                    <Input
                        id="fullName"
                        name="fullName"
                        placeholder="Họ và tên"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.fullName}
                    />
                    {formik.touched.fullName && formik.errors.fullName && (
                        <p className="text-red-500 text-sm">{formik.errors.fullName}</p>
                    )}

                    <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                    />
                    {formik.touched.email && formik.errors.email && (
                        <p className="text-red-500 text-sm">{formik.errors.email}</p>
                    )}

                    <Input
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        placeholder="Nhập lại mật khẩu"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.confirmPassword}
                    />
                    {formik.touched.confirmPassword && formik.errors.confirmPassword && (
                        <p className="text-red-500 text-sm">{formik.errors.confirmPassword}</p>
                    )}
                </>
            )}

            <Input
                id="userName"
                name="userName"
                placeholder="Tên tài khoản"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.userName}
            />
            {formik.touched.userName && formik.errors.userName && (
                <p className="text-red-500 text-sm">{formik.errors.userName}</p>
            )}

            <Input
                id="password"
                name="password"
                type="password"
                placeholder="Mật khẩu"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password && (
                <p className="text-red-500 text-sm">{formik.errors.password}</p>
            )}

            {isLogin && (
                <label className="flex items-center space-x-2">
                    <Checkbox
                        name="rememberMe"
                        checked={formik.values.rememberMe}
                        onCheckedChange={(value) => formik.setFieldValue("rememberMe", value)}
                    />
                    <span className="text-sm">Ghi nhớ đăng nhập</span>
                </label>
            )}

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <Button type="submit" className="w-full">
                {isLogin ? "Đăng nhập" : "Đăng ký"}
            </Button>
        </form>
    );
};

export default AuthForm;