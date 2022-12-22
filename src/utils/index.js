const idGenerator = () => {
    return Math.random().toString(16).slice(2) + "-" + Math.random().toString(16).slice(2)
}

export { idGenerator }