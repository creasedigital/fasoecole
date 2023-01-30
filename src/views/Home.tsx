import {
	Box,
	Stack,
	Radio,
	RadioGroup,
	List,
	ListIcon,
	ListItem,
} from "@chakra-ui/react";
import { useState } from "react";
import { BiCheckCircle } from "react-icons/bi";

const Home = () => {
	const foodItems = ["Eba", "Mega pot lover", "Beans"];
	const drinkItems = ["Hollandia yogurt", "Monster energy drink"];

	const [value, setValue] = useState("food");
	const [items, setItems] = useState(foodItems);

	const handleItem = (value: string) => {
		if (value === "drink") {
			setItems(drinkItems);
		} else setItems(foodItems);
	};

	return (
		<>
			<RadioGroup onChange={setValue} value={value} mb={"20px"}>
				<Stack direction="row">
					<Radio
						value="food"
						onChange={(e) => handleItem(e.target.value)}
					>
						Food
					</Radio>
					<Radio
						value="drink"
						onChange={(e) => handleItem(e.target.value)}
					>
						Drinks
					</Radio>
				</Stack>
			</RadioGroup>
			<Box>
				<List spacing={3}>
					{items.map((item, id) => (
						<ListItem key={id}>
							<ListIcon as={BiCheckCircle} color="green.500" />
							{item}
						</ListItem>
					))}
				</List>
			</Box>
		</>
	);
};

export default Home;
