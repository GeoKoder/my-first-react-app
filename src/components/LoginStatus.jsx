const LoginStatus = ({ isLoggedIn, username }) => {
    return (
        <div style={{ padding: "16px" }}>
            {isLoggedIn ? (
                <div>
                    <p>Welcome back, {username}!</p>
                    <button>Logout</button>
                </div>
            ): (
                <div>
                    <p>Please sign in to continue.</p>
                    <button>Login</button>
                </div>
            )}
        </div>
    );
};

export default LoginStatus;