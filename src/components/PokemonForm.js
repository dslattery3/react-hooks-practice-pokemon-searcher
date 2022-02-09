import React from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({handleNewName, handleNewHP, handleNewFront, handleNewBack, handleSubmit}) {

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={(e) => handleSubmit(e)}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={(e)=>handleNewName(e)} />
          <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={(e)=>handleNewHP(e)}/>
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            onChange={(e)=>handleNewFront(e)}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            onChange={(e)=>handleNewBack(e)}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
