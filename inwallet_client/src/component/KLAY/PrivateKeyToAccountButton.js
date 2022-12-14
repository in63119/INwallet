import React, { useState } from "react";
import {
  Button,
  Box,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

<<<<<<< HEAD
=======
// api
import { privateKeyToAccount } from "../../api/klaytn";
import { getTxByAddress } from "../../api/common";

>>>>>>> 5532c8113a5d94d9e5fce826c399fe5ee27a4980
// recoil
import { useSetRecoilState, useRecoilValue } from "recoil";
import { addressState } from "../../recoil/address";
import { txState } from "../../recoil/tx";
<<<<<<< HEAD
// api
const { privateKeyToAccount, getTxByAddress } = require("../../api/klaytn");
=======
import { chainState } from "../../recoil/chain";
>>>>>>> 5532c8113a5d94d9e5fce826c399fe5ee27a4980

export default function PrivateKeyToAccountButton() {
  const [open, setOpen] = useState(false);
  const setStateAddress = useSetRecoilState(addressState);
  const setTxState = useSetRecoilState(txState);
  const chain = useRecoilValue(chainState);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handlePrivateKeyToAccount = async (e) => {
    const address = await privateKeyToAccount(e.target.value);

    if (address) {
      const transactions = await getTxByAddress(address, chain.SelectChain);
      if (transactions) {
        setTxState((prev) => ({
          ...prev,
          klayTx: transactions,
        }));
      }
      setStateAddress((prev) => ({
        ...prev,
        KLAYAddress: address,
        KLAYPrivateKey: e.target.value,
      }));
      handleClose();
    }
  };

  return (
    <Box>
      <Button variant="text" color="info" onClick={handleClickOpen}>
        비밀키로 계정 불러오기
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>비밀키로 계정 불러오기</DialogTitle>
        <DialogContent>
          <DialogContentText>
            이미 계정을 갖고 있는 경우 비밀키를 통해 계정을 불러올 수 있습니다.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Private Key"
            type="email"
            fullWidth
            variant="standard"
            onChange={handlePrivateKeyToAccount}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>취소</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
