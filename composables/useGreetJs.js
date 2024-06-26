export const useGreetJs = (name) => {
    const greeting = `Hello ${name || 'there'}, this is JavaScript!`

    return greeting
}