export const formattingPhoneNumber = (phoneNumber: string) => {
    return phoneNumber.replace(/(.)(...)(...)(..)(..)/, '+$1 ($2) $3-$4-$5')
}