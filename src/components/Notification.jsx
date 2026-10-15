const Notification = ({ message, show }) => {
    return (
        <div>
            {show && (
                <div style={{
                    backgroundColor: "#d43dda",
                    color: "#155724",
                    padding: "12px 16px",
                    borderRadius: "4px",
                    marginBottom: "16px",
                }}>
                    {message}
                </div>
            )}
        </div>
    );
};

export default Notification;