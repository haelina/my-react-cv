import * as React from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import myCV from "../../documents/cv_hanna_sepanmaa_11_2021.pdf";
import { SizeMe } from "react-sizeme";

export const Cv = () => {
  return (
    <>
      <SizeMe
        render={({ size }) => (
          <div className="Pdf">
            <Document file={myCV}>
              <Page className="cvPage" pageNumber={1} width={size.width} />
            </Document>
          </div>
        )}
      ></SizeMe>
    </>
  );
};
