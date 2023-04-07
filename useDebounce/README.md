# Notas

Ejemplo de como utilizar el debounce:

```

const [searchTerm, setSearchTerm] = useState('');
const debouncedSearchTerm = useDebounce(searchTerm, 500);

function handleSearch(event) {
setSearchTerm(event.target.value);
}

```

