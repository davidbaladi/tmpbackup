1st: npx create-react-app my-app
2nd: cd my-app, npm start, code .

-> /components/Button.js

3rd: npm install react-bootstrap bootstrap
4th: rcc
5th: import Button from "react-bootstrap/Button";

render(<div>

<>
  <style type="text/css">
    {`
    .btn-flat {
      background-color: purple;
      color: white;
    }

    .btn-xxl {
      padding: 1rem 1.5rem;
      font-size: 1.5rem;
    }
    `}
  </style>

  <Button variant="flat" size="xxl">
    flat button
  </Button>
</>

</div>)


App.js:
6th: import Button from "./components/Button";
7th: return (div <Button/> div)

