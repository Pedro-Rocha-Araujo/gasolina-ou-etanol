import "./globals.css";
import { ToastContainer } from "react-toastify";

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR">
      <body>
        <ToastContainer autoClose={1000} />
        {children}
        <script src="https://kit.fontawesome.com/ba7c57d421.js"></script>
      </body>
    </html>
  );
}
