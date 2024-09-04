import path from 'node:path';
export const PATH_DB = path.join('src/db', 'db.json');
// console.log(PATH_DB);
// приклад для побудови шляху із його частин
// const pathToWorkDir =  // отримуємо шлях до кореневої директорії викликом метода process.cwd()
// const pathToFile = path.join(pathToWorkDir, 'some_folder', 'some_file.txt'); // розширюємо шлях додатковими елементами
// // pathToFile на MacOs буде __шлях до папки, де запущений процес__/some_folder/some_file.txt'
// // pathToFile на Windows буде __шлях до папки, де запущений процес__\\some_folder\\some_file.txt'
