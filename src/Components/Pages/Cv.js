import * as React from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import myCV from "../../documents/cv_hanna_sepanmaa_11_2021.pdf";

export const Cv = () => {
  return (
    <>
      <main>
        <Document file={myCV}>
          <Page pageNumber={1} />
        </Document>
      </main>
    </>
  );
};
