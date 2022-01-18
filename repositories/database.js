const notes = [
    {
        id: "1",
        name: "The theory of evolution",
        date: "July 30, 2020",
        category: "Random_thought",
        content: "The evolution is...",
        dates: '-',
        isArchived: false
    },
    {
        id: "2",
        name: "Whar about dinosaurs?",
        date: 'April 13, 2020',
        category: 'Random_thought',
        content: 'Dinosaurs were very poor creatures.',
        dates: '-',
        isArchived: false
    },
    {
        id: "3",
        name: "New Feature",
        date: 'December 25, 2020',
        category: 'Idea',
        content: 'Implemented new feature',
        dates: '-',
        isArchived: false
    },
    {
        id: "4",
        name: "Books",
        date: 'February 10, 2021',
        category: 'Task',
        content: 'New startup',
        dates: '-',
        isArchived: false
    },
    {
        id: "5",
        name: "William Gaddis",
        date: 'September 9, 2021',
        category: 'Task',
        content: 'Meet William',
        dates: '-',
        isArchived: true
    }
]

const categories = ['Random_thought', 'Idea', 'Task'];

const ERROR_MESSAGE = `Incorrect type of data or missed fields!\n 
                        Your message have to contain this fields:\n
                        {name:<string>\n
                        content:<string>\n
                        category:<string>\n
                        isArchive:<boolean>}!`

export { notes, categories, ERROR_MESSAGE };