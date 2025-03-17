function Sources() {
  return (
    <div>
      <h1>This is the Source page</h1>
      <p>
        {" "}
        I used all of the following links to figure out how to make this navbar
        setup work. It was honestly very confusing, because initially I didn't
        get why the normal a tag wasn't working, and ended up consulting{" "}
        <a href="https://stackoverflow.com/questions/63979705/how-to-link-to-another-page-in-react">
          this StackOverflow thread
        </a>
        . At that point it seemed more complicated than what I expected to be in
        for, and I was not sure if I wanted to set up the browser router,
        because it required an installation I wasn't familiar with, so I watched
        this brief tutorial,{" "}
        <a href="https://www.youtube.com/watch?v=_dgNBNwqZgM">
          'Routes Navigation between pages and links in React Js'
        </a>{" "}
        by The Amir's Lab, and then I read the
        <a href="https://reactrouter.com/start/modes">
          ReactRouter.com tutorial
        </a>
        . This seems to be created by the same folks who created the
        "react-router" and "react-router-dom" packages. It made some conceptual
        sense but was a little bit too high-level to make sense, so I used the
        interactive code at the
        <a href="https://www.w3schools.com/react/react_router.asp">
          W3Schools React Router tutorial
        </a>
        page, which was extremely helpful. I'm honestly still not sure I fully
        understand all of it but it does work.
      </p>
    </div>
  );
}

export default Sources;
