(function () {
  const user1Function = () => {
    console.log("user1Function---------------");
  };
  const user2Function = () => {
    console.log("user2Function-----2----------");
    console.log("user1Function-----1.11123----------");
  };

  user1Function();
})();
