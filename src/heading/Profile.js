const User = {
    name: 'CLARICE LAMBERT',
    imgUrl:'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90
}


/**
 * Renders the profile component.
 *
 * 
 *Certainly! Here's a smaller and smarter explanation of the concepts:

Function Comment: A block of text that describes a function, its parameters, and its return value.

Markdown: A lightweight markup language used to format text.

Function Description: A brief explanation of what the function does.

Parameters: Variables or values passed into a function to customize its behavior.

Return Value: The output/result of a function's execution.

By providing a clear function comment, you make your code easier to understand and maintain.
 
Syntax: The style attribute is added to an HTML/JSX element as an attribute. It takes a JavaScript object as its value, where each property represents a CSS property and its value.
* @return {JSX.Element} The profile component.
 */
export default function Profile(){
    return(
        <>
        
        <h1>{User.name}</h1>
        <img
        className="avatar"
        alt="APORRA DO ALT"
        src={User.imgUrl}
        style={{
            width: User.imageSize,
            height: User.imageSize
            }}/>
        </>
    )
}