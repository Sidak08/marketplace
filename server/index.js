class User {
    constructor(name, age, email, id, password,) {
        this.name = name;
        this.age = age;
        this.email = email;
    }
}

class Item {
    constructor(image, title, price, tags, description, location, user) {
        this.title = title;
        this.price = price;
        this.image = image ? [image] : [];
        this.tags = tags ? [tags] : [];
        this.description = description
        this.user = user
        this.date = new Date
        this.location = location
    }
    addImage(image) {
        if (Array.isArray(image)) {
            this.image.push(...image);
        } else {
            this.image.push(image);
        }
    }

    removeImage(image) {
        const index = this.image.indexOf(image);
        if (index !== -1) {
            this.image.splice(index, 1);
        }
    }

    addTag(tag) {
        if (Array.isArray(tag)) {
            this.tags.push(...tag);
        } else {
            this.tags.push(tag);
        }
    }

    removeTag(tag) {
        const index = this.tags.indexOf(tag);
        if (index !== -1) {
            this.tags.splice(index, 1);
        }
    }

    changeTitle(title) {
        this.title = title
    }

    changePrice(price) {
        this.price = price
    }

    changeDescription(description) {
        this.description = description
    }

    changeLocation(location) {
        this.location = location
    }

    delete() {
        delete this
    }
}

const bike = new Item()


