type snb = Array<string | number | boolean>;

function isInArray(arr: snb, ...args: snb): boolean {
  return args.every((element) => {
    return (arr.includes(element));
  });
}

function summator(...args: Array<string | number>): number {
  const result = args.reduce( (sum: number, current: string | number) => {
    if (typeof current === 'string') {
      const currentNumber: number = parseInt(current, 10);
      return sum + ((!isNaN(currentNumber)) ? parseInt(current, 10) : 0);
    }
    return sum + current;
  }, 0);
  return result;
}

function getUnique(...args: snb): snb {
  return Array.from(new Set(args));
}

function revertLetters(str: string) {
  const words: string[] = str.split(' ');
  const resultWords: string[] = [];
  words.forEach((element) => {
    const letters = Array.from(element);
    const charactersArray = new Array(letters.length);
    const signsArray = new Array(letters.length);

    letters.forEach((letter, i) => {
      if (validate(letter)) {
        charactersArray.push(letter);
      } else {
        signsArray[i] = letter;
      }
    });
    charactersArray.reverse();

    let j = 0;
    for (let i = 0; i < letters.length; i++) {
    if (!signsArray[i]) {
      signsArray[i] = charactersArray[j];
      j++;
    }
  }

    resultWords.push(signsArray.join(''));

  });

  return resultWords.join(' ');
}

function validate(strValue: string) {
  const objRegExp = /^[a-z\u00C0-\u00ff]+$/;
  return objRegExp.test(strValue);
}
