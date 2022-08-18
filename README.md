
## PREREQUISITES:

#1- Create copy of .env.template as .env and fill all variable values


#2- Make sure to use either pm2 or docker to run application



## DATABASE TABLE

```bash
CREATE TABLE `logs` (
  `id` int(11) NOT NULL,
  `apiKey` varchar(500) NOT NULL,
  `type` varchar(250) DEFAULT NULL,
  `requestBody` text DEFAULT NULL,
  `responseBody` text DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `cardNumber` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
```

```bash
ALTER TABLE `logs` ADD PRIMARY KEY (`id`);
```

```bash
ALTER TABLE `logs` MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;
```



## USAGE:

```bash
git pull origin master
```

```bash
npm install
```

```bash
npm run start
```


