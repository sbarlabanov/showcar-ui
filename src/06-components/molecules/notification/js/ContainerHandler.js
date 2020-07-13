import Notification from './Notification';
import Container from './Container';

class ContainerHandler {

    constructor() {
        this.containers = {};
    }

    /**
     * Add a new notification
     *
     * @param {HTMLElement} element
     */
    createNotification(element) {
        let notification = new Notification(element);
        notification.create();

        element.notification = notification;
    }

    /**
     * Update a existing notification
     *
     * @param {HTMLElement} element
     * @param {String} attribute
     * @param {String} previous previous value
     * @param {String} value new value
     */
    updateNotification(element, attribute, previous, value) {
        let notification = element.notification;

        if (notification === undefined || notification === null) return;

        if ('class' === attribute && 'show' === value) {
            this.addNotificationToContainer(notification);
        } else if ('target' === attribute) {
            this.moveNotificationToContainer(notification, attribute, previous, value);
        }

        if (typeof notification.update === 'function') {
            notification.update(attribute, value);
        }
    }

    /**
     * @param {Notification} notification
     */
    addNotificationToContainer(notification) {
        let container;

        if (!this.hasContainer(notification.targetName)) {
            container = this.createContainer(notification.targetName);
        } else {
            container = this.getContainer(notification.targetName);
        }
        container.addNotification(notification);
    }

    /**
     * Move a notification to a new container if the target was changed
     *
     * @param {Notification} notification
     * @param {String} attribute
     * @param {String} previous
     * @param {String} value
     */
    moveNotificationToContainer(notification, attribute, previous, value) {
        if (previous !== value) {
            if (this.hasContainer(previous)) {
                let container = this.getContainer(previous);
                container.removeNotification(notification);
            }
            this.addNotificationToContainer(notification);
        }

        // cleanup old containers without notifications
        if (this.hasContainer(previous)) {
            let container = this.getContainer(previous);
            if (container.childNodes.length < 1) {
                container.remove();
                delete this.containers[previous];
            }
        }
    }

    /**
     * Create container below the target element
     *
     * @param target
     */
    createContainer(target) {
        let container = new Container(target);
        this.containers[target] = container;

        return container;
    }

    /**
     * @param {String} target
     * @returns {Container}
     */
    getContainer(target) {
        return this.containers[target];
    }

    /**
     *
     * @param {String} name
     * @returns {boolean}
     */
    hasContainer(name) {
        // eslint-disable-next-line no-prototype-builtins
        return this.containers.hasOwnProperty(name);
    }

}

export default ContainerHandler;
