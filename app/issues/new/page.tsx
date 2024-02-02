"use client";

import { TextArea, TextField, Button } from "@radix-ui/themes";
import React from "react";

const NewIssue = () => {
  return (
    <div className="max-w-xl space-y-3">
      <TextField.Root>
        <TextField.Input placeholder="Issue title " />
      </TextField.Root>

      <TextArea placeholder="Issue description" />

      <Button>Submit Issue</Button>
    </div>
  );
};

export default NewIssue;
