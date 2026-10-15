const UserProfile = ({ user }) => {
    if (!user) {
        return (
            <div style={{ padding: "40px", textAlign: "center", color: "#999" }}>
                <p>No user data available.</p>
                <p>Please log in to view your profile.</p>
            </div>
        );
    }

    return (
        <div style={{ padding: "24px" }}>
            <h2>{user.name}</h2>
            <p>Email: {user.email}</p>
            <p>Location: {user.location}</p>
        </div>
    );
};

export default UserProfile;