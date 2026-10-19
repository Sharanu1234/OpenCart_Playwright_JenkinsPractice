const fs = eval('require')('fs');
const XLSX = eval('require')('xlsx');

export class DataProvider {
    static readJson(filePath: string) {
        const raw = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(raw);
    }

    static readCsv(filePath: string) {
        const raw = fs.readFileSync(filePath, 'utf8');
        const rows: string[][] = [];
        let row: string[] = [];
        let field = '';
        let inQuotes = false;

        for (let i = 0; i < raw.length; i++) {
            const character = raw[i];

            if (character === '"') {
                if (inQuotes && raw[i + 1] === '"') {
                    field += '"';
                    i++;
                } else {
                    inQuotes = !inQuotes;
                }
            } else if (character === ',' && !inQuotes) {
                row.push(field);
                field = '';
            } else if ((character === '\n' || character === '\r') && !inQuotes) {
                if (character === '\r' && raw[i + 1] === '\n') i++;
                row.push(field);
                if (row.some(value => value.length > 0)) rows.push(row);
                row = [];
                field = '';
            } else {
                field += character;
            }
        }

        if (field.length > 0 || row.length > 0) {
            row.push(field);
            if (row.some(value => value.length > 0)) rows.push(row);
        }

        const [headers, ...dataRows] = rows;
        if (!headers) return [];

        return dataRows.map(values => Object.fromEntries(
            headers.map((header, index) => [header, values[index] ?? ''])
        ));
    }

    static readExcel(filePath: string) {
        const workbook = XLSX.readFile(filePath);
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        return XLSX.utils.sheet_to_json(worksheet, { header: 1 });
    }
}