const getLastItem = <T>(arr: T[]) => {
  return arr[arr.length - 1]
}

const getFileName = (fileNameWithPath: string) => {
  return getLastItem(fileNameWithPath.split('/'))
}
/*
['package-lock.json', 'yarn.lock', '.gitignore']
*/
export const filterIgnoredFiles = (ignoredList: string[]) => (
  filename: string,
) => {
  return ignoredList.includes(getFileName(filename))
}
