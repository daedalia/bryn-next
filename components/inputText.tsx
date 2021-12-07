type InputTextProperties = {
    id: string;
    label: string;
    required: boolean;
}

export function InputText(props: InputTextProperties){
    return (
        <section>
            <label htmlFor={props.id}>{props.label} {!props.required && <small>(optional)</small>}</label>
            <input type="text" id={props.id} name={props.id} required={props.required}/>
        </section>
    );
}