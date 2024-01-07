import { CardWrapper } from "./CardWrapper"

export const LoginForm = () => {
    return (
        <CardWrapper
            headerLabel="Welcome Back!"
            backButtonLabel="Don't have an account? Sign Up"
            backButtonLink="/auth/register"
            showSocial={true}
        >
            <h1>Login Form</h1>
        </CardWrapper>
    )
}