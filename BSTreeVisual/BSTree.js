
const add = document.querySelector('.add');
const get = document.querySelector('.get');
const remove = document.querySelector('.remove');
const clear = document.querySelector('.clear');

let tree = new Tree();

function Tree() {
    this.root = null;
}

add.addEventListener('click', tree.treeAdd, false);

function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
}

Tree.prototype.treeAdd = function() {
    const inputValue = document.querySelector(`.input`).value;
    return tree.addValue(inputValue);
};

Tree.prototype.addValue = function (val) {
    let node = new Node(val);
    if (this.root === null) {
        this.root = node;
    } else {
        this.root.addNode(node);
    }
};

Tree.prototype.getValue = function (val) {
    let node = this.root.getNode(val);
    if (node) {
        return node.value;
    } else {
        return null;
    }
};

Tree.prototype.getParentValue = function (val) {
    let node = this.root.getNode(val);
    if (node){
        return node.parent;
    } else {
        return null;
    }
};

Tree.prototype.getLeftValue = function (val) {
    let node = this.root.getNode(val);
    if (node && node.left !== null){
        return node.left.value;
    } else {
        return null;
    }
};

Tree.prototype.getRightValue = function (val) {
    let node = this.root.getNode(val);
    if (node && node.right !== null){
        return node.right.value;
    } else {
        return null;
    }
};

Tree.prototype.getChildValues = function (val) {
    let node = this.root.getNode(val);
    if (node) {
        return node.getChildValuesFromNodes();
    } else {
        return [];
    }
};

Tree.prototype.removeValue = function (val) {
    let node = this.root.getNode(val);
    console.log(node, val);
    if (node){
        let parent = node.parent;
        let parentNode = this.root.getNode(parent);
        let children = node.getChildValuesFromNodes();
        parentNode.removeChild(node);
        for (let child in children) {
            parentNode.addNode(new Node(children[child]));
        }
    }
};

Tree.prototype.clear = function () {
    this.value = 0;
    this.root = null;
};

Node.prototype.addNode = function (node) {
    if (node.value < this.value) {
        if (this.left == null) {
            this.left = node;
            node.parent = this.value;
        } else {
            this.left.addNode(node);
        }
    } else if (node.value > this.value) {
        if (this.right == null) {
            this.right = node;
            node.parent = this.value;
        } else {
            this.right.addNode(node);
        }
    }
};

Node.prototype.getNode = function (val) {
    if (this.value === val) {
        return this;
    } else if (val < this.value && this.left != null) {
        return this.left.getNode(val);
    } else if (val > this.value && this.right != null) {
        return this.right.getNode(val);
    }
    return null;
};

Node.prototype.removeChild = function (node) {
    console.log(node, this.left, this.right);
    if (node === this.left){
        this.left = null;
    }

    if (node === this.right){
        this.right = null;
    }
};

Node.prototype.getChildValuesFromNodes = function () {

    if (this.left == null && this.right == null) {
        return [];
    }
    let values = [];
    if (this.right) {
        values.push(this.right.value);
        values = values.concat(this.right.getChildValuesFromNodes());
    }
    if (this.left) {
        values.push(this.left.value);
        values = values.concat(this.left.getChildValuesFromNodes());
    }
    return values;
};

