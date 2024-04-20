import { useState } from "react";
import style from "./Quote.module.scss";
export default function Quote({ children }: { children: React.ReactNode }) {
  const [snackBar, setSnackBar] = useState(false);

  const handleCopyToClipBoard = (e) => {
    setSnackBar(true);
    navigator.clipboard.writeText(e.target.innerText);
    setTimeout(() => {
      setSnackBar(false);
    }, 2000);
  };

  return (
    <div className={style.Item} onClick={handleCopyToClipBoard}>
      <div className={style.Background} />
      <div className={style.Text}>{children}</div>
      {snackBar && <div className={style.Snackbar}>Copied</div>}
    </div>
  );
}
