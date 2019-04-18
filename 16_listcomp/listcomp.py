upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ"

def min_thresh(str):
    lst= [0 if x in upper for x in str]
    if lst:
        return True
    return False

