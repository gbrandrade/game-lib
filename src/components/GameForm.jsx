import { useState } from "react";
import PropType from "prop-types";
import TextInput from "./TextInput";

GameForm.propTypes = {
  addGame: PropType.func,
};

export default function GameForm({ addGame }) {
  const [title, setTitle] = useState("");
  const [cover, setCover] = useState("");

  const handleSubmit = (ev) => {
    ev.preventDefault();
    if (title) addGame({ title, cover });
    setTitle("");
    setCover("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextInput
        name="title"
        labelText="Título:"
        value={title}
        setValue={setTitle}
      ></TextInput>

      <TextInput
        name="cover"
        labelText="Capa:"
        value={cover}
        setValue={setCover}
      ></TextInput>
      <button>Adicionar</button>
    </form>
  );
}
