import {InputText} from "../components/inputText";

export default function Home() {
  return (
  <main>Hello you 
  <InputText id={"name"} label={"Firstname"} required={true}></InputText>
    <InputText id={"surname"} label={"Surname"} required={false}></InputText>
  </main>);
}