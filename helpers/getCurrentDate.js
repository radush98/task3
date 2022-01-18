export const getDate = () => {
    const date = new Date();
    return `${date.toLocaleString('en', { month: 'long' })} ${date.getDate()}, ${date.getFullYear()}`
}