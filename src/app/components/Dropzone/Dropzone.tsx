"use client";

import React, { DragEvent, useRef, useEffect } from "react";
import style from "./Dropzone.module.scss";
export default function Dropzone({ error, onFileChange }) {
  const dropZoneRef = useRef<HTMLDivElement>(null);

  const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    dropZoneRef.current?.classList.add(style.Active);
  };

  const handleDragLeave = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    dropZoneRef.current?.classList.remove(style.Active);
  };

  const onDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    dropZoneRef.current?.classList.remove(style.Active);
    const files = event.dataTransfer.files;
    onFileChange(files);
  };

  return (
    <div
      className={style.Wrapper}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={onDrop}
      ref={dropZoneRef}
    >
      <div className={style.Container}>
        <label htmlFor="files" className={style.DragTitle}>
          [ Drag your file here ]
        </label>
        {error && <div className={style.Error}>{error}</div>}
        <input
          type="file"
          id="files"
          className={style.FileInput}
          onChange={onFileChange}
          accept=".annot"
          title=" "
        />
      </div>
    </div>
  );
}
