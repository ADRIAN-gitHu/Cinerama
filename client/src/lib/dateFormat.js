export const dateFormat= (date) => {
    return new Date(date).toLocaleString('es-PE',{
        weekday:'short',
        month:'long',
        day:'numeric',
        hour:'numeric',
        minute:'numeric'
    })
}