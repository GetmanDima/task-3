export function isValidPhone(phone: string) {
    return phone.match(/^([+]?\d{1,3})(\d{3})(\d{3})(\d{2})(\d{2,4})$/);
}