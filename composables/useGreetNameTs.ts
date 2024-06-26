export const useGreetNameTs = () => {
    const greetingJs = useGreetJs('Stefano')
    const greetingTs = useGreetTs('Stefano')

    console.log(['useGreetNameTs', greetingJs, greetingTs])

    return greetingTs
}