import {Wrapper} from "@/app/Wrapper";
import {contactsPage} from "@/app/contactsPage";
import {Template} from "@/templates/template";


export default function Home() {

    return (
        <div>
            <div className={"project"}>
                <button className={"base-button--red"}>класс base-button--red в lightdom</button>
            </div>

            <Wrapper templates={[Template]} htmlStrings={contactsPage}/>
        </div>
    );
}
