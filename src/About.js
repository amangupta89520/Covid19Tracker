import React from "react";
import Avatar from './images/avatar.jpg'

const AboutUs = () => {
    return (
        <div className="p-2  bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
            <div className="text-center mb-4">
                <img src={Avatar} className="w-28 h-28 shadow-2xl rounded-full mx-auto" alt=""/>
                <p className="mt-4 p-2 border-b-2 border-gray-400 text-xl text-red-400 dark:text-yellow-300">Aman Gupta</p>   
            </div>
            <div className="m-4">
                <p className="dark:text-yellow-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit excepturi, libero expedita ullam aspernatur sed laudantium rerum, et obcaecati in suscipit, saepe voluptatibus quidem consequuntur id repellendus odit aperiam harum possimus? Iste temporibus, nemo eaque veniam cumque aspernatur beatae consequuntur, obcaecati deserunt ex repellat repudiandae et quia reiciendis dolorem quod. Odio sequi a quidem repellat libero odit. Adipisci maxime, similique a totam consectetur molestiae odio officia tempora eum sit ipsum assumenda corrupti rem, consequatur, repellat odit nobis eius itaque sed voluptas quaerat. Delectus corporis quidem ullam velit totam soluta aut quasi quis inventore alias. Illo ut quisquam qui nobis cum.</p>
            </div>
        </div>
    );
}
 
export default AboutUs;