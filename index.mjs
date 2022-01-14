/**
 * 
 * @param  {...number} num 
 */
export function add(...num) {
  return num.reduce((pv, cv) => pv + cv)
}