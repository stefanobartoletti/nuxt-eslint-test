export const useGreetNameJs = () => {
    const greetingJs = useGreetJs('Stefano')
    const greetingTs = useGreetTs('Stefano')

    console.log(['useGreetNameJs', greetingJs, greetingTs])

    return greetingJs
}