import { categories } from "../database.js"

export const checkType = (field, type) => {
    return (typeof (field) !== type)? false : true
}

export const checkCategory = category => {
    return categories.find(providedCategory => providedCategory === category)
}

export const isCorrect = note => {
    if (
        checkType(note.name, 'string') &&
        checkType(note.content, 'string') &&
        checkType(note.category, 'string') &&
        checkType(note.isArchived, 'boolean')
    )
        return true
    else
        return false
}