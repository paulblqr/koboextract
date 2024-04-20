"use client";

import React, { useState, useEffect } from "react";
import Quote from "./components/Quote/Quote";
import style from "@/app/style/main.module.scss";
import { convertAnnotToXml } from "@/app/helpers/helpers";
import Dropzone from "./components/Dropzone/Dropzone";
var parseString = require("xml2js").parseString;

const Main = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  const handleFileChange = async (files) => {
    setError("");
    const file = files[0];
    if (file?.type !== "") {
      setError("Only .annot files are available for upload.");
      setData(null);
      return;
    }

    const xmlContent = await convertAnnotToXml(file);

    parseString(xmlContent, function (err, result) {
      console.log(result, "result");
      setData({
        title: result.annotation.annotationSet[0].publication[0]["dc:title"][0],
        notes: result.annotation.annotationSet[0].annotation,
      });
    });
  };

  useEffect(() => {
    const listener = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setData(null);
      }
    };

    window.addEventListener("keydown", listener);

    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, []);

  return (
    <div className={style.Wrapper}>
      {data ? (
        <div className={style.Container}>
          <div
            className={style.ClearContainer}
            onClick={() => {
              setData(null);
              setError("");
            }}
          >
            [ <span className={style.ClearText}>Clear</span> ]
          </div>
          <div className={style.Title}>{data.title}</div>
          <div className={style.Results}>
            {data.notes.map((item, index) => {
              return (
                <Quote key={index}>{item.target[0].fragment[0].text[0]}</Quote>
              );
            })}
          </div>
        </div>
      ) : (
        <Dropzone onFileChange={handleFileChange} error={error} />
      )}
    </div>
  );
};

export default Main;
