import {Wrapper} from "@/app/Wrapper";
import {contactsPage} from "@/app/contactsPage";


export default function Home() {

    return (
        <div>
            <div className={"project"}>
                <button className={"base-button--red"}>класс base-button--red в lightdom</button>
            </div>

            <Wrapper templateRef={"temp"} htmlString={contactsPage}/>
        </div>
    );
}
