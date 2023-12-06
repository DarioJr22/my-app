
import { useState } from "react";




/**
 * Renders a button component with the text "My Button".
 *      - Notice that <MyButton /> starts with a capital letter. That’s how you know it’s a React component. 
 *          - React component names must always start with a capital letter, while HTML tags must be lowercase.
 *      - The export default keywords specify the main component in the file.
 * @return {ReactElement} The rendered button component.
 */
export default function MyButton(){
    /* You’ll get two things from useState: the current state (count), 
    and the function that lets you update it (setCount). You can give them any names, 
    but the convention is to write [something, setSomething]. */

    const[ count, setCount ] = useState(0);

    function handleClick(){
       setCount(count + 1)
    }

    return(
        <button onClick={handleClick}>My Button was clicked {count} times</button>
    );
}

