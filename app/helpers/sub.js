import { helper } from '@ember/component/helper';

export function sub(numbers) {
 return numbers.reduce((a, b) => Number(a) - Number(b));
}

export default helper(sub);
