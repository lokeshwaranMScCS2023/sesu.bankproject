// NotificationPanel.js
import React from "react";

function NotificationPanel({ notifications, onClose }) {
    return (
        <div className="notification-panel">
            <div className="notification-header">
                <h3>Notifications</h3>
                <button onClick={onClose}>Close</button>
            </div>
            <div className="notification-list">
                {notifications.map(notification => (
                    <div key={notification.id} className="notification-item">
                        <p>{notification.message}</p>
                        <span>{notification.timestamp}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default NotificationPanel;
