let screen = document.getElementById("screen");

const callbackHell = (
  timerStart,
  nine,
  eight,
  seven,
  six,
  five,
  four,
  three,
  two,
  one,
  wishes
) => {
  timerStart(() => {
    nine(() => {
      eight(() => {
        seven(() => {
          six(() => {
            five(() => {
              four(() => {
                three(() => {
                  two(() => {
                    one(() => {
                      wishes();
                    });
                  });
                });
              });
            });
          });
        });
      });
    });
  });
};

let startWith10 = (number9) => {
  screen.innerHTML = "10";
  document.body.style.backgroundColor = "#FFC7C7";
  number9();
};

let count9 = (number8) => {
  setTimeout(() => {
    screen.innerHTML = "9";
    document.body.style.backgroundColor = "#DBE2EF";
    number8();
  }, 1000);
};

let count8 = (number7) => {
  setTimeout(() => {
    screen.innerHTML = "8";
    document.body.style.backgroundColor = "#FCE38A";
    number7();
  }, 1000);
};

let count7 = (number6) => {
  setTimeout(() => {
    screen.innerHTML = "7";
    document.body.style.backgroundColor = "#F3F8FF";
    number6();
  }, 1000);
};

let count6 = (number5) => {
  setTimeout(() => {
    screen.innerHTML = "6";
    document.body.style.backgroundColor = "#F6DFEB";
    number5();
  }, 1000);
};

let count5 = (number4) => {
  setTimeout(() => {
    screen.innerHTML = "5";
    document.body.style.backgroundColor = "#CEE5D0";
    number4();
  }, 1000);
};

let count4 = (number3) => {
  setTimeout(() => {
    screen.innerHTML = "4";
    document.body.style.backgroundColor = "#DBE2EF";
    number3();
  }, 1000);
};

let count3 = (number2) => {
  setTimeout(() => {
    screen.innerHTML = "3";
    document.body.style.backgroundColor = "#FEFDCA";
    number2();
  }, 1000);
};

let count2 = (number1) => {
  setTimeout(() => {
    screen.innerHTML = "2";
    document.body.style.backgroundColor = "#FCD1D1";
    number1();
  }, 1000);
};

let count1 = (celebrate) => {
  setTimeout(() => {
    screen.innerHTML = "1";
    document.body.style.backgroundColor = "#FFCEF3";
    celebrate();
  }, 1000);
};

let wish = () => {
  setTimeout(() => {
    screen.innerHTML = "Happy Independence Day";
    document.body.style.backgroundColor = "#FCDEC0";
  }, 1000);
};

callbackHell(
  startWith10,
  count9,
  count8,
  count7,
  count6,
  count5,
  count4,
  count3,
  count2,
  count1,
  wish
);
