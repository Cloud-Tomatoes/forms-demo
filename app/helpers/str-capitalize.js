import { helper } from '@ember/component/helper';
import { capitalize } from '@ember/string';

export default helper(function strCapitalize([str]) {
  return capitalize(str);
});
