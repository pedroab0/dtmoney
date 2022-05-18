import { useState } from "react";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionsProvider } from "./hooks/useTransactions";
import { GlobalStyle } from "./styles/styles";

export function App() {
	const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

	const handleOpenNewTransactionModal = () => setIsNewTransactionModalOpen(true);
	const handleCloseNewTransactionModal = () => setIsNewTransactionModalOpen(false);

	return (
		<TransactionsProvider>
			<GlobalStyle />
			<Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
			<Dashboard />

			<NewTransactionModal
				isOpen={isNewTransactionModalOpen}
				onRequestClose={handleCloseNewTransactionModal}
			/>
		</TransactionsProvider>
	);
}

