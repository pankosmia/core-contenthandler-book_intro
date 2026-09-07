import { useState } from "react";
import { BurritoSelect } from "./BurritoSelect";
import BookPicker from "./BookPicker";
import { Box } from "@mui/material";
import { getFirstChapter } from "./findFirstChapter";

export function WrapperNav({ flavor }) {
  return (
    <Box sx={{ display: "flex", flexDirection: "row", gap: 1 }}>
      <BurritoSelect flavor={flavor} />
      <BookPicker setFirstChapter={getFirstChapter(flavor)} />
    </Box>
  );
}
